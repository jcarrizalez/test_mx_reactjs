import React, { useState, useEffect } from 'react';
import { redux } from '../services';

const Loading = () => {

	const [ active, setActive] = useState(true);

	useEffect(() => {
		//loader se dispara cada vez que se hace una peticion a la api
        const unsubscribe = redux.subscribe( () => {
            if(redux.is('loader')){
            	setActive(redux.get('loader'));
            }
        });
      	return () => unsubscribe();
    }, []);

    if(!active) return null;

    return (
    	<div className="text-center w-100">
	        <div className="lds-ellipsis">
	        	<div></div>
	        	<div></div>
	        	<div></div>
	        	<div></div>
	        	<div></div>
	        </div>
	    </div>
	);
}

export default Loading;