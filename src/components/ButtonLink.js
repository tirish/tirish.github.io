import './ButtonLink.css';

export default function ButtonLink({onClick, className, children}) {
    return (
        <button type="button" className={`ButtonLink-btn ${className}`} onClick={onClick}>{children}</button>
    );
}