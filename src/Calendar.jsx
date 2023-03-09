import React, { useState, useEffect } from 'react'
import './Calendar.css'

const Calendar = ({ usuario }) => {

    const [month, setMonth] = useState('Jan')
    const [datos, setDatos] = useState()
    const [userDays, setUserDays] = useState()

    const selectMonth = () => {

        switch (month) {
            case 'Jan':


                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '1', backgroundColor: showUserDays('01') }}>1</li>
                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>
                        <li style={{ backgroundColor: showUserDays('29') }}>29</li>
                        <li style={{ backgroundColor: showUserDays('30') }}>30</li>
                        <li style={{ backgroundColor: showUserDays('31') }}>31</li>
                    </ol>
                )
                break;
            case 'Feb':
                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '4', backgroundColor: showUserDays('01')  }}>1</li>
                       
                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>


                    </ol>
                )
                break;
            case 'Mar':
                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '4',backgroundColor: showUserDays('01') }}>1</li>

                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>
                        <li style={{ backgroundColor: showUserDays('29') }}>29</li>
                        <li style={{ backgroundColor: showUserDays('30') }}>30</li>
                        <li style={{ backgroundColor: showUserDays('31') }}>31</li>

                    </ol>
                )
                break;
            case 'Apr':
                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '7',backgroundColor: showUserDays('01') }}>1</li>

                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>
                        <li style={{ backgroundColor: showUserDays('29') }}>29</li>
                        <li style={{ backgroundColor: showUserDays('30') }}>30</li>

                    </ol>
                )
                break;
            case 'May':
                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '2',backgroundColor: showUserDays('01') }}>1</li>

                       
                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>
                        <li style={{ backgroundColor: showUserDays('29') }}>29</li>
                        <li style={{ backgroundColor: showUserDays('30') }}>30</li>
                        <li style={{ backgroundColor: showUserDays('31') }}>31</li>

                    </ol>
                )
                break;
            case 'Jun':
                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '5' ,backgroundColor: showUserDays('01')}}>1</li>

                      
                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>
                        <li style={{ backgroundColor: showUserDays('29') }}>29</li>
                        <li style={{ backgroundColor: showUserDays('30') }}>30</li>
                      


                    </ol>
                )
                break;
            case 'Jul':
                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '7' ,backgroundColor: showUserDays('01')}}>1</li>

                       
                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>
                        <li style={{ backgroundColor: showUserDays('29') }}>29</li>
                        <li style={{ backgroundColor: showUserDays('30') }}>30</li>
                        <li style={{ backgroundColor: showUserDays('31') }}>31</li>

                    </ol>
                )
                break;
            case 'Aug':
                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '3' ,backgroundColor: showUserDays('01')}}>1</li>

                       
                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>
                        <li style={{ backgroundColor: showUserDays('29') }}>29</li>
                        <li style={{ backgroundColor: showUserDays('30') }}>30</li>
                        <li style={{ backgroundColor: showUserDays('31') }}>31</li>

                    </ol>
                )
                break;
            case 'Sep':
                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '6',backgroundColor: showUserDays('01') }}>1</li>

                       
                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>
                        <li style={{ backgroundColor: showUserDays('29') }}>29</li>
                        <li style={{ backgroundColor: showUserDays('30') }}>30</li>
                        


                    </ol>
                )
                break;
            case 'Oct':
                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '1',backgroundColor: showUserDays('01') }}>1</li>

                      
                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>
                        <li style={{ backgroundColor: showUserDays('29') }}>29</li>
                        <li style={{ backgroundColor: showUserDays('30') }}>30</li>
                        <li style={{ backgroundColor: showUserDays('31') }}>31</li>
                    </ol>
                )
                break;
            case 'Nov':
                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '4',backgroundColor: showUserDays('01') }}>1</li>

                       
                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>
                        <li style={{ backgroundColor: showUserDays('29') }}>29</li>
                        <li style={{ backgroundColor: showUserDays('30') }}>30</li>
                      

                    </ol>
                )
                break;
            case 'Dec':
                return (
                    <ol class="calendar">

                        <li class="day-name">Dom</li>
                        <li class="day-name">Lun</li>
                        <li class="day-name">Mar</li>
                        <li class="day-name">Mie</li>
                        <li class="day-name">Jue</li>
                        <li class="day-name">Vie</li>
                        <li class="day-name">Sab</li>

                        <li style={{ gridColumnStart: '6' ,backgroundColor: showUserDays('01')}}>1</li>


                        <li style={{ backgroundColor: showUserDays('02') }}>2</li>
                        <li style={{ backgroundColor: showUserDays('03') }}>3</li>
                        <li style={{ backgroundColor: showUserDays('04') }}>4</li>
                        <li style={{ backgroundColor: showUserDays('05') }}>5</li>
                        <li style={{ backgroundColor: showUserDays('06') }}>6</li>
                        <li style={{ backgroundColor: showUserDays('07') }}>7</li>
                        <li style={{ backgroundColor: showUserDays('08') }}>8</li>
                        <li style={{ backgroundColor: showUserDays('09') }}>9</li>
                        <li style={{ backgroundColor: showUserDays('10') }}>10</li>
                        <li style={{ backgroundColor: showUserDays('11') }}>11</li>
                        <li style={{ backgroundColor: showUserDays('12') }}>12</li>
                        <li style={{ backgroundColor: showUserDays('13') }}>13</li>
                        <li style={{ backgroundColor: showUserDays('14') }}>14</li>
                        <li style={{ backgroundColor: showUserDays('15') }}>15</li>
                        <li style={{ backgroundColor: showUserDays('16') }}>16</li>
                        <li style={{ backgroundColor: showUserDays('17') }}>17</li>
                        <li style={{ backgroundColor: showUserDays('18') }}>18</li>
                        <li style={{ backgroundColor: showUserDays('19') }}>19</li>
                        <li style={{ backgroundColor: showUserDays('20') }}>20</li>
                        <li style={{ backgroundColor: showUserDays('21') }}>21</li>
                        <li style={{ backgroundColor: showUserDays('22') }}>22</li>
                        <li style={{ backgroundColor: showUserDays('23') }}>23</li>
                        <li style={{ backgroundColor: showUserDays('24') }}>24</li>
                        <li style={{ backgroundColor: showUserDays('25') }}>25</li>
                        <li style={{ backgroundColor: showUserDays('26') }}>26</li>
                        <li style={{ backgroundColor: showUserDays('27') }}>27</li>
                        <li style={{ backgroundColor: showUserDays('28') }}>28</li>
                        <li style={{ backgroundColor: showUserDays('29') }}>29</li>
                        <li style={{ backgroundColor: showUserDays('30') }}>30</li>
                        <li style={{ backgroundColor: showUserDays('31') }}>31</li>

                    </ol>
                )
                break;


            default:
                break;
        }

    }


    const getLaborableDays = async (m) => {

        await fetch(`https://servergrilla-production.up.railway.app/${m}`)
            .then(response => response.json())
            .then(data => setDatos(data))

    }

    const showUserDays = (d) => {
        let userd
        let day = d
        datos?.map((u) => {
            u.Legajo === usuario ? userd = u : <></>
        })


        if (userd) {
            return (
                asignColor(userd[`${day}`])
            )
        } else {
            return (
                '#333'
            )
        }

    }

    const asignColor = (turno) => {
        let col
        let asistencia

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

        return col
    }



    useEffect(() => {
        getLaborableDays(month)
    }, [month])

    return (

        <div className="calendar-wrapper">
            <select onChange={(e) => setMonth(e.target.value)}>
                <option value={'Jan'}>Enero</option>
                <option value={'Feb'}>Febrero</option>
                <option value={'Mar'}>Marzo</option>
                <option value={'Apr'}>Abril</option>
                <option value={'May'}>Mayo</option>
                <option value={'Jun'}>Junio</option>
                <option value={'Jul'}>Julio</option>
                <option value={'Aug'}>Agosto</option>
                <option value={'Sep'}>Septiembre</option>
                <option value={'Oct'}>Octubre</option>
                <option value={'Nov'}>Noviembre</option>
                <option value={'Dec'}>Diciembre</option>
            </select>

            {selectMonth()}

            <div style={{border:'solid 1px #ccc',margin:'10px',borderRadius:'10px'}}>
                Referencias
                <div style={{display:'flex', margin:'5px'}}><div style={{width:'30px', margin:'0px 5px', height:'20px', backgroundColor:'#30C3FF'}}></div>TURNO MAÑANA</div>
                <div style={{display:'flex', margin:'5px'}}><div style={{width:'30px', margin:'0px 5px', height:'20px', backgroundColor:'#FF7B30'}}></div>TURNO TARDE</div>
                <div style={{display:'flex', margin:'5px'}}><div style={{width:'30px', margin:'0px 5px', height:'20px', backgroundColor:'#6300AC'}}></div>TURNO NOCHE</div>
                <div style={{display:'flex', margin:'5px'}}><div style={{width:'30px', margin:'0px 5px', height:'20px', backgroundColor:'#00A10A'}}></div>TURNO INTERMEDIO</div>
                <div style={{display:'flex', margin:'5px'}}><div style={{width:'30px', margin:'0px 5px', height:'20px', backgroundColor:'#8A8A8A'}}></div>FRANCO</div>
                
            </div>
        </div>

    )
}

export default Calendar

