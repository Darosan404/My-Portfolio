// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import info from '../../endpoints/me.json';

export default (req, res) => {
  res.status(200).send(info);
};
