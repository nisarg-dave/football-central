import twitterRequests from "../../../utils/twitterRequests";

export default async function getDavidTweets() {
  const response = await fetch(
    `${process.env.TWITTER_API_URL}` +
      twitterRequests.userTweetTimelineById1 +
      "/46875124" +
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
