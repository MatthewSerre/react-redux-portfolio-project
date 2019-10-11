import React from 'react';

const AmiibosList = ({ amiibos }) => (
    <div>
      { amiibos.map(amiibo => <div>{amiibo.character}</div>) }
    </div>
  )

export default AmiibosList