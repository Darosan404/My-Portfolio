import project from '../../../endpoints/projects';

export default function handler(req, res) {
  const { id } = req.query;
  let data = '';

  project.map((pro) => {
    if (pro.url === id) {
      data = pro;
    }
    return null;
  });

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).send('Not Found');
  }
}
