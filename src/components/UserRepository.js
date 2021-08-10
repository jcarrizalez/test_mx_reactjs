import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { redux, api } from '../services';

const getDataByUsername= username => api('repositories_username', {username});

export default function UserRepository({match}){

    var [repositories, setRepositories] = useState(redux.get('repositories'));
    var [username, setUsername] = useState(redux.get('username'));

    useEffect(() => {

        //redux
        var rdx;

        const filterRepository = filter => {
            let result = [];

            //busco y filtro array
            redux.get('repositories').forEach(item=> {
                if(JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1){
                  result.push(item);
                }
            })
            setRepositories(result);
        }


        const unsubscribe = redux.subscribe( () => {

            //control de estados redux 
            switch (redux.current()) {
                case 'repositories_username':

                    //seteo al estado del componente la data de git
                    rdx = redux.all();
                    let result = rdx.repositories_username;
                    redux.push('repositories',result);
                    setRepositories(result);
                    if(result.length>0 && rdx.text_search.length>0){
                        setUsername(rdx.text_search);
                    }
                    break;
                case 'text_search':

                    rdx = redux.all();
                    if(rdx.input_search==='username'){
                        //busco en git
                        if(rdx.text_search.length>2){
                            getDataByUsername(rdx.text_search);
                        }
                    }
                    else{
                        //filtro data que tengo en redux
                        filterRepository(rdx.text_search);
                    }
                    break;
                default:
                    break;
            }  
        });

        //primera vez hago un check en redux si tengo data en store
        getDataByUsername(redux.get('username'));

        return () => unsubscribe();
    }, []);
    
    return (
        <React.Fragment>
            <div className="d-none d-sm-inline">
                <div className="row table-header small font-weight-bold py-1">
                    <div className="col">Id</div>
                    <div className="col">Name</div>
                    <div className="col">Language</div>
                    <div className="col">Forks</div>
                    <div className="col">Size</div>
                    <div className="col">Default Branch</div>
                </div>
            </div>
            {repositories.map((item,key)=> <Row key={key} username={username} item={item}/> )}
        </React.Fragment>
    );   
}

const Row = ({username, item:{id, name, html_url, language, forks, size, description, default_branch}}) => {

    const Small = ({name, value}) =>
        <div className="col-3">
            <div className="font-weight-light text-muted small">{name}</div> 
            <span className="small">{value}</span>
        </div>;

    return(
        <React.Fragment>
            <div className="d-none d-sm-inline">
                <Link className="row table-row small py-1 color-link" to={`/detail/${username}/${name}`} title={description}>
                    <div className="col">{id}</div>
                    <div className="col">{name}</div>
                    <div className="col">{language}</div>
                    <div className="col">{forks}</div>
                    <div className="col">{size}</div>
                    <div className="col">{default_branch}</div>
                </Link>
            </div>
            <div className="d-inline d-sm-none">
                <Link className="row table-row small py-1 color-link" to={`/detail/${username}/${name}`} title={description}>
                    <div className="col-12">
                        <span className="font-weight-bold">{name}</span>
                    </div>
                    <Small  name='Size' value={size}/>
                    <Small  name='Branch' value={default_branch}/>
                    <Small  name='Forks' value={forks}/>
                    <Small  name='Language' value={language}/>
                </Link>
            </div>
        </React.Fragment>    
    )
}
