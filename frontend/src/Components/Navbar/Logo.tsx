import { useNavigate } from "react-router-dom";
type LogoProps = {
    _path: string;
    styles?: string | null;
}

const Logo: React.FC<LogoProps> = ({_path, styles}) => {
    const navigate = useNavigate();

    const handleNavigation = () => navigate(_path);
    

    return (
    <div className={`${styles && styles}`}>
        <button 
            onClick={handleNavigation}>
            <span style={{fontFamily: 'magilio'}}>BookNest</span>
        </button>
    </div>
  );
};

export default Logo;
