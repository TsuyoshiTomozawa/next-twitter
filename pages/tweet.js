import React, {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import TwitterApi from 'twitter-api-v2'
import TweetBox from '../components/TweetBox'

export async function getServerSideProps() {
    // const twitterClient = new TwitterApi(process.env.TWITTER_BEARE_TOKEN);
    //
    // const roClient = twitterClient.readOnly;
    //
    // // Play with the built in methods
    // const user = await roClient.v2.userByUsername('4ro_ro4');

    // const credential = {
    //     appKey: process.env.appKey,
    //     appSecret: process.env.appSecret,
    //     accessToken: process.env.accessToken,
    //     accessSecret: process.env.accessSecret,
    // }
    // console.log(credential)

    // try {
    //     const client = new TwitterApi({
    //         appKey: process.env.TWITTER_APIKEY,
    //         appSecret: process.env.TWITTER_SECRET,
    //         accessToken: process.env.TWITTER_ACCESS_TOKEN,
    //         accessSecret: process.env.TWITTER_ACCESS_SECRET,
    //     });
    //
    //     const homeTimeline = await client.v1.homeTimeline();
    //     console.log(homeTimeline)
    //
    // } catch (e) {
    //     console.log(e)
    // }

    return {
        props: {
            appKey: process.env.TWITTER_APIKEY,
            appSecret: process.env.TWITTER_SECRET,
            accessToken: process.env.TWITTER_ACCESS_TOKEN,
            accessSecret: process.env.TWITTER_ACCESS_SECRET,
            beareToken: process.env.TWITTER_BEARE_TOKEN
        }
    }

}

export default function tweet(props) {

    // const [value, setValue] = useState('');
    // const [canWrite, setCanWrite] = useState(true);
    //
    // const handleChange = (event) => {
    //     if (value.length > 140) {
    //         setCanWrite(true)
    //         return;
    //     }
    //     setValue(event.target.value);
    // };
    //
    // const tweet = async () => {
    //     // const credential = {
    //     //     appKey: props.appKey,
    //     //     appSecret: props.appSecret,
    //     //     accessToken: props.accessToken,
    //     //     accessSecret: props.accessSecret,
    //     // }
    //     // console.log(credential)
    //     //
    //     // try {
    //     //     const client = new TwitterApi({
    //     //     appKey: props.appKey,
    //     //     appSecret: props.appSecret,
    //     //     accessToken: props.accessToken,
    //     //     accessSecret: props.accessSecret,
    //     // });
    //     //
    //     //     const homeTimeline = await client.v1.homeTimeline();
    //     //     console.log(homeTimeline)
    //     //
    //     // } catch (e) {
    //     //     console.log(e)
    //     // }
    //
    //
    //     // const client = new TwitterApi(props.beareToken);
    //     // console.log(client.v2.readWrite.tweets())
    //
    //     // const roClient = twitterClient.readOnly;
    //     // await client.v1.tweet('hello world').then(data => {
    //     //     console.log(data)
    //     // }).catch(err => {
    //     //     console.log(err)
    //     // }).finally(() => {
    //     //     console.log("finish")
    //     // });
    // }

    return (
        <>
            <TweetBox props={props}/>
            {/*<Box*/}
            {/*    className="tweet-box"*/}
            {/*    component="form"*/}
            {/*    sx={{*/}
            {/*        '& > :not(style)': {m: 1, width: '864px'},*/}
            {/*    }}*/}
            {/*    noValidate*/}
            {/*    autoComplete="off"*/}
            {/*>*/}

            {/*    <TextField*/}
            {/*        id="standard-textarea"*/}
            {/*        label="Let's Tweet"*/}
            {/*        placeholder="Placeholder"*/}
            {/*        multiline*/}
            {/*        variant="standard"*/}
            {/*        value={value}*/}
            {/*        onChange={handleChange}*/}
            {/*    />*/}
            {/*    <div className="card-footer">*/}
            {/*        <div className="card-footer-left"><span>2021/09/23 12:00 </span></div>*/}
            {/*        <span className="card-footer-right">*/}
            {/*        <div className="delete-btn">Delete</div>*/}
            {/*        <div className="edit-btn">Edit</div>*/}
            {/*        <div className="post-btn" onClick={tweet}>Post</div>*/}
            {/*    </span>*/}
            {/*    </div>*/}
            {/*</Box>*/}
        </>
    )
        ;
}