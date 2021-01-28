const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://www.jamiepask.com';
export const assetDir = dev ? '' : '//elasticbeanstalk-us-west-2-337485666964.s3-us-west-2.amazonaws.com/assets';