import React from 'react';

class Booking extends React.Component {

  componentDidMount(){
    this.activate();
  }

  activate(){
    (function(d, sc, u) {
      var s = d.createElement(sc), p = d.getElementsByTagName(sc)[0];
      s.type = 'text/javascript';
      s.async = true;
      s.src = u + '?v=' + (+new Date());
      p.parentNode.insertBefore(s,p);
      })(document, 'script', '//aff.bstatic.com/static/affiliate_base/js/flexiproduct.js');
  }

  render(){
      if(this.props.type === 'single'){
        return (
          <ins className="bookingaff" data-aid="1272225" data-target_aid="1272225" data-prod="nsb" data-width="100%" data-height="auto">
              <a href="//www.booking.com?aid=1272225">Booking.com</a>
          </ins>
        )
      }
      else if(this.props.type === 'home'){
        return (
          <ins className="bookingaff" data-aid="1919807" data-target_aid="1919807" data-prod="banner" data-width="728" data-height="90" data-lang="pl">
              <a href="//www.booking.com?aid=1919807">Booking.com</a>
          </ins>
        )
      }
    }
}

export default Booking;
