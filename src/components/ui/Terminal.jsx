import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Help } from './Help';

const Terminal = () => {
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setCommand(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            processCommand(command);
            setCommand('');
        } else if (e.key === 'c' && e.ctrlKey) {
            setOutput([]);
        }
    };

    const processCommand = (cmd) => {
        const promptWithCommand = (
            <div>
                <span className='text-[#02ff00] text-sm'>keshav-yadav</span>
                <span className='text-pink-500 text-sm'>@github:~$ </span>
                <span className='text-sm'>{cmd}</span>
            </div>
        );

        const newOutput = [...output, promptWithCommand];
        setOutput(newOutput);

        if (cmd === 'resume') {
            downloadResume();
        } else if (cmd === 'clear') {
            setOutput([]);
        } else if (cmd === 'home') {
            navigate('/');
        } else if (cmd === 'about') {
            navigate('/about');
        } else if (cmd === 'project') {
            navigate('/project');
        } else if (cmd === 'contact') {
            navigate('/contact');
        } else if (cmd === 'linkedin') {
            window.open('https://www.linkedin.com/in/keshavyadav5/', '_blank');
            const message = <div className="text-sm">Opening LinkedIn profile...</div>;
            setOutput([...newOutput, message]);
        } else if (cmd === 'github') {
            window.open('https://www.github.com/keshavyadav5/', '_blank');
            const message = <div className="text-sm">Opening Github profile...</div>;
            setOutput([...newOutput, message]);
        } else if (cmd === 'help') {
            const helpMessage = Help.message.split('\n').map((line, index) => (
                <div key={index} className="text-sm">{line}</div>
            ));
            setOutput([...newOutput, ...helpMessage]);
        } else {
            const errorMessage = <div className="text-sm">Command not found</div>;
            setOutput([...newOutput, errorMessage]);
        }
    };

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/path-to-your-resume.pdf'; // Update with the correct resume path
        link.download = 'Your_Name_Resume.pdf';
        link.click();
    };

    return (
        <div className="bg-black terminal text-white min-h-[500px] max-h-[500px] overflow-y-auto rounded-md p-4 font-mono flex flex-col">
            <div className="flex-grow overflow-y-auto">
                {output.map((line, index) => (
                    <div key={index} className="text-sm">{line}</div>
                ))}
            </div>
            <div className="flex items-center">
                <span className='text-[#02ff00] text-sm'>keshav-yadav</span>
                <span className='text-pink-500 text-sm'>@github:~$ </span>
                <input
                    type="text"
                    value={command}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="bg-black text-white border-none outline-none text-sm flex-grow"
                    autoFocus
                />
            </div>
        </div>
    );
};

export default Terminal;
