import experiences from '../../endpoints/experiences';

export default (req, res) => {
  res.status(200).json(experiences);
};
