import React, { Component } from 'react';
import '../Menu.css';
import Game from "../App";
import {Link} from "react-router-dom";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            isDisabled: true,
            recordData: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }



    componentWillMount() {
        let request = new XMLHttpRequest();
        let recordData;
        request.open('GET', 'http://localhost:3200/', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.onload = function(){
           recordData = JSON.parse(this.responseText);
        };
        // recordData = JSON.parse(request.responseText);

        request.onerror = function() {
            alert('Ошибка ' + this.status);
        };
        request.send();

    };

    handleChange = (event) => {
        console.log(event.target.value);
          if(event.target.value){
              this.setState({userName : event.target.value, isDisabled: false});
          }
          else
          {
              this.setState({userName : event.target.value, isDisabled: true});
          }
    };

    render(){
        const {userName,isDisabled,recordData} = this.state;
        return(
            <div id="window">
                <div id="content">
                <div id = "nameBox">Имя игрока:</div>
                <input type="text"  id="inputUser" className="inputUser" onChange={this.handleChange}/>
                <Link id="link" to={{
                        pathname: '/Game',
                        state: {userName}
                    }}> <button id="buttonStart" disabled={isDisabled}>Старт</button></Link>
                    <table id = "recordsTable" title="Таблица рекордов:">
                        {/*<caption>Таблица рекордов:</caption>*/}
                        {/*<tr>*/}
                            {/*<td>Имя:</td>*/}
                            {/*<td>Скорость:</td>*/}
                        {/*</tr>*/}
                        {/*{recordData.userName.map((element, index) =>*/}
                        {/*<tr><td>' + element + '</td><td>' + recordData.userSpeed[index] + '</td></tr>)}*/}
                    </table>

                </div>
            </div>
        );

    }

}

export default Menu;
