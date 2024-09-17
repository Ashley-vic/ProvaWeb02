import './App.css';
//import FunctionA from './components/03Hierarquia/FunctionA';
//import HelloWorld from './components/00-HelloWord';
//import ArrowFunction from './components/001-ArrowFunction';
//import Calculadora from './components/01-Calculadora'; 
//import MyProps from './components/02-Props';
//import {Header as H, Body as B, Footer as F} from './components/04MultiploComponente'
//import * as Site from './components/04MultiploComponente'
//import { Supermercado, Legume, Fruta, Bebida } from './components/05Childrem/MyChildremV0';
//import FuncaoA from './components/06Contexto/FuncaoA';
//import SaveData from './components/07Storage/FunctionLocalStorage';
//import Pai from './components/08PaiFilho/Pai';
//import FunctionEstados from './components/09Estados/FunctionEstados';
//import PokemonAxios from './components/10Axios/PokemonAxios'
//import TelaPrincipal from './components/11Redux/v1/TelaPrincipal';
//import MeuIndex from './components/11Redux/v2/Meuindex';
//import MinhaPromise from './components/12Promisses/MinhaPromise';
//import MeuAsync from './components/12Promisses/MeuAsync';
//import Signin from './components/13MUI/01Signin/Signin';
import RuAvalie from './components/01Ru/Login';
import Menu from './components/01Ru/Menu';
//import MyMenu from './components/13MUI/02Crud/MyMenuV1';
import MainPage from './components/13MUI/02Crud/MainPage';

function App() {
  return (
    <div>
        {/*<p>
          <Site.Header />
          <Site.Body />
          <Site.Footer/>
        </p>*/}
        {/*Contexto*/}
        {/*<p>
          <Supermercado nome = "Ubinga">
            <Legume nome = "Le" />
            <Fruta nome = "Fu" />
            <Bebida nome = "dre" />
          </Supermercado>
        </p>*/}

        {/*LocalStorage
          <SaveData />
        */}

        {/*Pai Filho
          <Pai />
        */}
        
        {/*States*/}
        <MainPage />
    </div>
  );
}

export default App;
