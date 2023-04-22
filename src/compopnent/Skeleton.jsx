import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={260}
    height={300}
    viewBox="0 0 260 300"
    backgroundColor="#f0f0f0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="540" y="370" rx="3" ry="3" width="88" height="6" /> 
    <rect x="15" y="3" rx="12" ry="12" width="220" height="132" /> 
    <rect x="65" y="146" rx="13" ry="13" width="119" height="25" /> 
    <rect x="3" y="176" rx="12" ry="12" width="241" height="78" /> 
    <rect x="4" y="261" rx="11" ry="11" width="65" height="29" /> 
    <rect x="139" y="259" rx="18" ry="18" width="101" height="34" />
  </ContentLoader>
)

export default MyLoader