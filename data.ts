import { Company } from "./interfaces";

const companies: Company[] = [
  {
    name: `Twitter`,
    imageUrl: `https://logo.clearbit.com/twitter.com`,
    sourceUrl: `https://blog.twitter.com/en_us/topics/company/2020/keeping-our-employees-and-partners-safe-during-coronavirus.html`,
    date: new Date("2020-05-12"),
  },
  {
    name: `Dropbox`,
    imageUrl: `https://logo.clearbit.com/dropbox.com`,
    sourceUrl: `https://twitter.com/Dropbox/status/1316061644452065280`,
    date: new Date("2020-10-13"),
  },
  {
    name: `Microsoft`,
    imageUrl: `https://logo.clearbit.com/microsoft.com`,
    sourceUrl: `https://blogs.microsoft.com/blog/2020/10/09/embracing-a-flexible-workplace/`,
    date: new Date("2020-10-09"),
  },
  {
    name: `REI`,
    imageUrl: `https://logo.clearbit.com/rei.com`,
    sourceUrl: `https://www.rei.com/newsroom/article/rei-co-op-to-pursue-sale-of-headquarters-embrace-distributed-work-model`,
    date: new Date("2020-08-12"),
  },
  {
    name: `Square`,
    imageUrl: `https://logo.clearbit.com/square.com`,
    sourceUrl: `https://www.theverge.com/2020/5/18/21261798/square-employees-work-from-home-remote-premanent-policy-ceo`,
    date: new Date("2020-05-18"),
  },
  {
    name: `Shopify`,
    imageUrl: `https://logo.clearbit.com/shopify.com`,
    sourceUrl: `https://twitter.com/tobi/status/1263483496087064579`,
    date: new Date("2020-05-21"),
  },
  {
    name: `Upwork`,
    imageUrl: `https://logo.clearbit.com/upwork.com`,
    sourceUrl: `https://twitter.com/hydnbrwn/status/1263840533144727552`,
    date: new Date("2020-05-22"),
  },
  {
    name: `Coinbase`,
    imageUrl: `https://logo.clearbit.com/coinbase.com`,
    sourceUrl: `https://blog.coinbase.com/post-covid-19-coinbase-will-be-a-remote-first-company-cdac6e621df7`,
    date: new Date("2020-05-20"),
  },
];

export default companies.sort((a, b) => (b.date as any) - (a.date as any));
