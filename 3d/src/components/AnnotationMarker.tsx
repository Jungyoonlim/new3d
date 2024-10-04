import React, { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react'; 

interface Position {
    x: number;
    y: number;
    z: number;
}

interface Annotation {
    position: Position; 
    text: string; 
}

interface AnnotationFormProps {
    position: Position;
    // callback function to handle saving the annotation 
    onSave: (annotation: Annotation) => void; 
}

const AnnotationForm: React.FC<AnnotationFormProps> = ({ position, onSave }) => {
    const [text, setText] = useState<string>('');


    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSave({ position, text}); 
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input field for annotation text, with value bound to the text state */}
            <input type="text" value={text} onChange={handleTextChange} />
            {/* Submit button to save the annotation */}
            <button type="submit">Save</button>
    </form>
    );
};

export default AnnotationForm; 