'use client'
import { useDropzone, FileWithPath } from "react-dropzone";
import './theme.scss';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useCallback } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const InputFileUpload = () => {
    return (
        <Button
            onClick={(event) => event.preventDefault()}
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
        >
            Upload files
            <VisuallyHiddenInput
                type="file"
            />
        </Button>
    );
}

interface IProps {
    setValue: (value: number) => void;
    setTrackUpload: any;
    trackUpload: any;
}

const StepOne = (props: IProps) => {
    const { data: session } = useSession();

    const { setValue, trackUpload } = props;

    const onDrop = useCallback(async (acceptedFiles: FileWithPath[]) => {
        if (acceptedFiles && acceptedFiles[0]) {
            setValue(1);
            const audio = acceptedFiles[0];
            const formData = new FormData()
            formData.append('fileUpload', audio);

            try {
                const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/files/upload`,
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${session?.access_token}`,
                            "target_type": 'tracks',
                            delay: 3000
                        },
                        onUploadProgress: progressEvent => {
                            let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total!);

                            props.setTrackUpload({
                                ...trackUpload,
                                fileName: acceptedFiles[0].name,
                                percent: percentCompleted
                            })
                        }
                    })
                props.setTrackUpload((prevState: any) => ({
                    ...prevState,
                    uploadedTrackName: res.data.data.fileName
                }))
            } catch (error) {
                //@ts-ignore
                alert(error?.response?.data?.message)
            }
        }
    }, [session])

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'audio': [".mp3", ".m4a", ".wav"]
        }
    });

    const files = acceptedFiles.map((file: FileWithPath) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <InputFileUpload />
                <p>Click hoặc Drag/Drop để upload file track!</p>
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </section>
    );
}
export default StepOne;