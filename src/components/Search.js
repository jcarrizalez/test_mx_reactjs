import React,{useState, useEffect} from 'react'
import { redux } from '../services';

export default function Search(){

    const [use, setUse ] = useState(redux.get('input_search', true));

    const [text, setText] = useState('');

    const onChange = ({target:{value}}) => setText(value);
    
    //Espero medio segundo para ejecutar la accion, se reinicia si cambia el texto
    useEffect(() => {

        const timer = setTimeout(() => {
            redux.push('text_search', text);
        }, 500);
        return () => clearTimeout(timer);
    }, [text]);

    useEffect(() => {
        const unsubscribe = redux.subscribe( () => {
        if(redux.is('input_search')){
            setUse(redux.get('input_search'));
        }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="z-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="z-search-input form-control" placeholder={"Buscar por "+(use==='username'?'Usuario':'Repositorio')}
                defaultValue="" onChange={onChange}/>
        </div>
    )
}
