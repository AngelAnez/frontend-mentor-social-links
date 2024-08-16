import SocialLink from "./components/SocialLink";
import avatar from "./assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <main className="container">
      <article className="card">
        <figure>
          <img src={avatar} alt="jessica-img" />
        </figure>
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
        <p>"Front-end developer and avid reader."</p>
        <nav>
          <SocialLink name="Github" url="https://github.com/AngelAnez" />
          <SocialLink name="Frontend Mentor" url="https://github.com/AngelAnez" />
          <SocialLink name="LinkedIn" url="https://github.com/AngelAnez" />
          <SocialLink name="Twitter" url="https://github.com/AngelAnez" />
          <SocialLink name="Instagram" url="https://github.com/AngelAnez" />
        </nav>
      </article>
    </main>
  );
}

export default App;
