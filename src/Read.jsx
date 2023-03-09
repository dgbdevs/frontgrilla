import React, { useState, useEffect } from 'react'
import Calendar from './Calendar'

const Read = () => {
    const [datos, setDatos] = useState()
    const [search, setSearch] = useState()
    const [usuario, setUsuario] = useState()
    const date = new Date()
    const dd = date.toDateString()
    const [month, setMonth] = useState('Enero')

    const obtenerDatos = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode:'cors',
          };
          
          await fetch(`https://servergrilla-production.up.railway.app/${dd.slice(4,7)}`, requestOptions)
            .then(response => response.json())
            .then(data => setDatos(data))
            .catch(error => console.log('error', error));
    }

    const searchToday = () => {
        let turno
        let asistencia
        let col = '#CCC'
        let day = dd.slice(8, 10)
        usuario ? console.log(usuario[day]) : console.log('no user')
        usuario[day] ? turno = usuario[day] : turno = 'F'

        switch (turno) {
            case 'NG':
                asistencia = 'TURNO NOCHE GOLF'
                col = '#320060'
                break;
            case 'MG':
                asistencia = 'TURNO MAÑANA GOLF'
                col = '#008EC8'
                break;
            case 'TG':
                asistencia = 'TURNO TARDE GOLF'
                col = '#B04000'
                break;
            case 'ING':
                asistencia = 'TURNO INTERMEDIO GOLF'
                col = '#005F06'
                break;
            case 'M':
                asistencia = 'TURNO MAÑANA REMOTO'
                col = '#30C3FF'
                break;
            case 'T':
                asistencia = 'TURNO TARDE REMOTO'
                col = '#FF7B30'
                break;
            case 'N':
                asistencia = 'TURNO NOCHE REMOTO'
                col = '#6300AC'
                break;
            case 'IN':
                asistencia = 'TURNO INTERMEDIO REMOTO'
                col = '#00A10A'
                break;
            case 'V':
                asistencia = 'VACACIONES 🎉'
                col = '#A10000'
                break;
            case 'F':
                asistencia = 'FRANCO 🥂'
                col = '#8A8A8A'
                break;
            case undefined:
                asistencia = 'FRANCO 🥂'
                col = '#8A8A8A'
                break;
            default:
                break;
              
        }

        return (
            <div>
                <p>{usuario.User}</p>
                <div className='day' style={{ backgroundColor: col }}>
                    <h1 style={{ margin: '0 0', padding: '0 0' }}>{dd.slice(8, 10)}</h1>
                    <h2 style={{ margin: '0 0', padding: '0 0' }}>{dd.slice(4, 7)}</h2>
                    <h3 style={{ borderTop: 'solid 1px #ccc' }}>{asistencia}</h3>
                </div>
            </div>
        )
    }

    const mostrarUser = () => {
        console.log('Buscando...')

        datos?.map((u) => {
            if (u.Legajo.toString() === search) {
                console.log(`${u.User} - ${u.Legajo}`)
                setUsuario(u)
            } else {
                console.log('No se encontro resultado')

            }
        })

    }

    const selectMonth = () => {

        return (
            <div>
                <Calendar usuario={usuario.Legajo}></Calendar>
            </div>
        )

    }

    useEffect(() => { obtenerDatos() }, [])

    return (

        <div className='card'>
            <div>
                <input placeholder='Ingrese su legajo' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => mostrarUser()}>Buscar</button>
            </div>

            {usuario ?
                <div>

                    {searchToday()}

                    {selectMonth()}
                </div>
                :

                <p>Sin registros</p>
            }




        </div>
    )
}

export default Read