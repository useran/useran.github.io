var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('blog', { title: 'Blog'});
});

router.get('/addArticle', (req, res) => {
  res.render('addArticle', { 
    title: 'New article',
    topics: ['health', 'technology', 'science', 'environment', 'leisure'],
  });
});

router.get('/editArticle', (req, res) => {
  res.render('editArticle', { 
    title: 'Edit an article',
    topics: ['health', 'technology', 'science', 'environment', 'leisure'],
    photos:
      { 
        health: 'https://techcrunch.com/wp-content/uploads/2020/08/GettyImages-1132089008.jpg?w=730&crop=1',
        technology: 'https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-open-graph.jpg',
        science: 'https://miro.medium.com/max/3840/1*JtDSfenjNoY0E8IZ0hb78w.png',
        environment: 'https://s3-ap-south-1.amazonaws.com/blogmindler/bloglive/wp-content/uploads/2018/11/13132636/Careers-to-Save-the-Environment.png',
        leisure: 'https://image.freepik.com/free-vector/flat-people-doing-leisure-outdoor-activities_23-2147884206.jpg'   
      }
  });
});

module.exports = router;