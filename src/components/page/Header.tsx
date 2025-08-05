import './styles/header.css';

export default function Header()
{
    return(
        <div id="component-header">
            <h1>CardCreator</h1>
            <div className="nav">
                <a href="https://github.com/SwishyFishy/CardCreatorWebsite.git" target="__blank">Contribute</a>
                <a href="mailto:jonahgallowayfenwick@protonmail.com">Contact the Creator</a>
            </div>
        </div>
    );
}