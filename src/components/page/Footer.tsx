import './styles/footer.css';

export default function Footer()
{
    return(
        <div className="component-footer">
            <span>&copy; Jonah Galloway-Fenwick {new Date().getFullYear()}. All Rights Reserved.</span>
        </div>
    );
}