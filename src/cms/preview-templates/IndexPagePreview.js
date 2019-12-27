import React from 'react'
import GreetCard from "../../components/GreetCard"

const IndexPagePreview = ({ entry }) => {
  const { greet } = entry.getIn(['data']).toJS()
  return <GreetCard greet={greet} />;
}

export default IndexPagePreview;
