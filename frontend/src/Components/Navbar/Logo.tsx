import { useNavigate } from "react-router-dom";
import leaf from "../../assets/leaf.png";
type LogoProps = {
  _path: string;
  styles?: string | null;
};

const Logo: React.FC<LogoProps> = ({ _path, styles }) => {
  const navigate = useNavigate();

  const handleNavigation = () => navigate(_path);

  return (
    <div className={`${styles && styles}`}>
      <button onClick={handleNavigation} className="flex items-center">
        <img src={leaf} alt="leaf" className="aspect-square mr-2" width={49} />
        <span style={{ fontFamily: "magilio" }}>BookNest</span>
      </button>
    </div>
  );
};

export default Logo;
