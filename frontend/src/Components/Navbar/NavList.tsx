import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavListProps {
    navList: {[key:string] : string},
}

export const NavList = ({navList}: NavListProps): React.ReactNode => {
    
    const navigation = useNavigate();
    const listContect: string[] = ['Home', 'Shop', 'New Arriaves', "Blog", 'About us']
    const [active, setActive] = useState<number>(0);
    
    
    const handleClick = (idx: number, item: string) => {
        setActive(idx);        
        Object.keys(navList).forEach(key => {
            if(key === item.replace(/\s/g, '').toLowerCase()) {
                navigation(navList[key]);
                console.log(navList);  
            }
        });
    }

    
    return (
        <div className="flex">
            <ul className={styles[1]}>
               {
                listContect && listContect.map((item, idx) =>(
                    <li className={styles[2]} key={idx}>
                        <a
                            onClick={() => handleClick(idx, item)}
                            className={`text-[14px] font-sans ${idx == active ? 'font-bold': ''}`}
                        >{item}</a>
                    </li>
                ))
               }
            </ul>
        </div>
    );
}


const styles = {
    '1': 'flex items-center',
    '2': 'text-[15px] mr-[1rem]',
}   