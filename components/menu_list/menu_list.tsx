import React from 'react';
import { menuListItem  } from '../../utils/menuData';
import styles from './menu_list.module.css'

export interface Props {
    menuList: menuListItem[]
}


const onClickMenu = (id: Number) => {
    console.log(id)
}


const MenuList = ({menuList} : Props) => {
    return (
        <>
            <ul className={styles.menus}>
                {menuList.map((menu) => (
                    
                    <li onClick={() => onClickMenu(menu.id)}>
                        {menu.title}
                    </li>
                ))}
            </ul>
        </>
    )

}

export default MenuList;