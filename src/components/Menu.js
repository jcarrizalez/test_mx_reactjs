import React,{useState} from 'react';
import { redux } from '../services';

const Menu = ({match}) => {

	const [use, setUse ] = useState(redux.get('input_search'));

	const onClick= value => {
		redux.push('input_search', value);
		setUse(value);
	}

	return (
		<ul className="nav nav-tabs pt-2">
			<NavLink use={use} id="username" title="Búsqueda de usuarios" onClick={onClick} />
			<NavLink use={use} id="repositorios" title="Búsqueda de repositorios" onClick={onClick} />
		</ul>
	)
}

const NavLink = ({title, id, use, onClick}) =>
    <li className="nav-item">
        <div className={'nav-link '+(id === use ? 'active':'') } onClick={()=>onClick(id)} data-tab={title}>{title}</div>
    </li>

export default Menu;