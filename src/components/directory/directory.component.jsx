import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: [{
        title: 'HATS',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'JACKETS',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'SNEAKERS',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'WOMENS',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens',
      },
      {
        title: 'MENS',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      },
      ]}
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ id, title, imageUrl, size, linkUrl }) => (
          <MenuItem key={id} title={title} size={size} imageUrl={imageUrl} linkUrl={linkUrl} />
        ))}
      </div>
    )
  }
}
export default Directory;