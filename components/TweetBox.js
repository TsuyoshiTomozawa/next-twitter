import React, {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import TwitterApi from 'twitter-api-v2'

export default function tweetBox({props}) {
    const [value, setValue] = useState('');
    const [canWrite, setCanWrite] = useState(true);

    const handleChange = (event) => {
        if (value.length > 140) {
            setCanWrite(true)
            return;
        }
        setValue(event.target.value);
    };

    const tweet = async () => {
        console.log(props.appKey)
        const client = new TwitterApi({
            appKey: props.appKey,
            appSecret: props.appSecret,
            accessToken: props.accessToken,
            accessSecret: props.accessSecret,
        });

        await client.v1.tweet('hello world').then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            console.log("finish")
        });
    }
    return (
        <Box
            className="tweet-box"
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '864px'},
            }}
            noValidate
            autoComplete="off"
        >

            <TextField
                id="standard-textarea"
                label="Let's Tweet"
                placeholder="Placeholder"
                multiline
                variant="standard"
                value={value}
                onChange={handleChange}
            />
            <div className="card-footer">
                <div className="card-footer-left"><span>2021/09/23 12:00 </span></div>
                <span className="card-footer-right">
                    <div className="delete-btn">Delete</div>
                    <div className="edit-btn">Edit</div>
                    <div className="post-btn" onClick={tweet}>Post</div>
                </span>
            </div>
        </Box>
    );
}