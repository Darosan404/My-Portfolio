import skills from '../../endpoints/skills';

export default (req, res) => {
  res.status(200).json(skills);
};
