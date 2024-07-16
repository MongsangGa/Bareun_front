import './Education.css';
import { Canvas } from "@react-three/fiber";

function Education() {
    const [file, setFile] = useState(null);
    const [audioSrc, setAudioSrc] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:5000/convert', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        setAudioSrc(`http://localhost:5000/${data.filePath}`);
    };

    return (
        <div className="App">
            <h1>Text to Speech</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" accept=".txt" onChange={handleFileChange} />
                <button type="submit">Convert to Speech</button>
            </form>
            {audioSrc && <video controls src={audioSrc} />}
        </div>
    );
}

export default Education;