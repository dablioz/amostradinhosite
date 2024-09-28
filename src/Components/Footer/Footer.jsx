import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
    return (
        <footer id="pezinho">
            <span>
                {"Made with ❤️ by:  wzley77 | "}
            </span>
            <div id="links">
                <a target="_blank" href="https://www.instagram.com/wzley77/">
                    <InstagramIcon />
                </a>
                <a target="_blank" href="https://github.com/dablioz/">
                    <GitHubIcon />
                </a>

                <a target="_blank" href=" https://www.linkedin.com/in/wzley/">
                    <LinkedInIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
