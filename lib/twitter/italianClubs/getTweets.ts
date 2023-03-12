import twitterRequests from "../../../utils/twitterRequests";

export default async function getDiMazrioTweets() {
  const response = await fetch(
    `${process.env.TWITTER_API_URL}` +
      twitterRequests.userTweetTimelineById1 +
      "/251690031" +
      twitterRequests.userTweetTimelineById2,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    }
  );
  const tweetsData = await response.json();

  const tweetsArr = tweetsData.data.reduce((arr: any, tweetData: any) => {
    arr.push({
      text: tweetData.text,
    });
    return arr;
  }, []);

  return tweetsArr;
}
