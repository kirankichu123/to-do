import './App.css'
import Todo from './components/Todo'

function App() {
  

  return (
    <>
      <div  style={{backgroundImage:`URL('https://th.bing.com/th/id/R.e839e552a25a066e69bbe8cf79a994cb?rik=LYrbftJ%2fMfok2g&riu=http%3a%2f%2fcdn.elegantthemes.com%2fblog%2fwp-content%2fuploads%2f2013%2f09%2fbg-11-full.jpg&ehk=ISUbgboEFvXRtHOUqCtfTLrRMuf6eZ5Odv33G8L086E%3d&risl=&pid=ImgRaw&r=0')`,height:'100vh',width:'100%'}}>
        <h1 style={{fontFamily:'cursive',color:'olive',fontSize:'55px',textDecoration:'underline'}} className='p-4 text-center'>My To Do's</h1>
        <Todo/>
      </div>
    </>
  )
}

export default App