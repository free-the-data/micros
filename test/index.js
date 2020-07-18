
/*Downloaded from https://www.codeseek.co/ianrose/scrollstory-c3js-xOyYLR */
$(function() {

  var chart = c3.generate({
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
  });

  var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
      ],
      colors: {
            data1: '#3d305c',
            data2: '#f8fa8a'
        },
      type: 'bar'
    }
  });

  var storyContainer = '#container1';

  $(storyContainer).scrollStory({
    keyboard: true,
    autoActivateFirstItem: false,
    debug: false,
    triggerOffset:'50%',
    scrollSensitivity: 17,
    contentSelector: '.story',
    itemfocus: function(ev, item) {
      if (item.index === 0) {
        chart.load({
          columns: [
            ['data1', 80, 100, 500, 400, 1, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
          ]
        });
      }
      if (item.index === 1) {
        chart.load({
          columns: [
            ['data1', 300, 100, 250, 150, 300, 150, 500],
            ['data2', 100, 200, 150, 50, 100, 250]
          ]
        });
      }
      if (item.index === 2) {
        chart.load({
          columns: [
            ['data1', 20, 30, 150, 600, 300, 150, 500],
            ['data2', 100, 200, 150, 50, 100, 250]
          ]
        });
      }
    }
  });

});
