import { Rating } from "./components/Rating"


function App() {
  const feedBackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];
  return (
    <>
      <Rating
        feedBackMessages={feedBackMessages}
      
      />
    </>
  )
}

export default App
