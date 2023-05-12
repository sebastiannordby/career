import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-main-100 h-11 flex items-center p-4">
      <h1 className="text-slate-900 text-white font-extrabold text-l lg:text-xl">Workify</h1>
    </div>
  );
}

function HomePage() {
  return (
    <div className="mx-auto w-100 mt-4">
      <section>
        <h1 
          className="text-slate-900 font-extrabold text-2xl lg:text3xl tracking-tight text-center dark:text-white">
          Looking for job, education advice or career interested?
        </h1>
        <p 
          className="mt-2 text-slate-600 text-center mx-auto dark:text-slate-400">
          We are here to <span className="underline">help you</span>.
        </p>
        <div className="mt-6 flex items-center place-content-center gap-2">
          <input 
            alt="Search where to start"
            className="lg:w-96 w-72 border border-2 border-main-100 border-dashed p-2 rounded-lg focus-visible:border-lime-500 focus-visible:outline-0 empty:text-center" 
            placeholder="Where do i start?" />
            <button className="p-2 text-center items-center inline-flex border border-slate-200">
              <span className="mx-auto mt-auto material-symbols-outlined rounded-l">search</span>
            </button>
        </div>
      </section>
      <section className="mt-16 w-100 h-96 flex flex-col">
        <h1 
          className="font-bold text-xl text-center">What can we offer you?</h1>
        <p className="mt-2 text-slate-500">We use AI in your algorithms to give you an extra advantage</p>

        <div className="mt-4 bg-secondary-100 p-4 rounded-sm shadow-2xl shadow-slate-200">
          <div className="mt-4 mx-auto p-2">
            <h1>Find job</h1>
            <p className="text-sm text-slate-600">Looking for a new job? Let us help you!</p>
            <img className="mx-auto mt-2 w-72" src="images/home/job.jpg" alt="Man smiling happy at work infront of laptop while drinking coffee"/>
          </div>
          <div className="mt-3 mx-auto p-2">
            <h1>Find your education path</h1>
            <p className="text-sm text-slate-600">
              We have all been there, finding the right education for <span className="underline">you</span> is hard.<br/>
              Thats why we are here to help you!
            </p>
            <img className="mt-2 w-72 mx-auto" src="images/home/edu.jpg" alt="Man smiling happy at work infront of laptop while drinking coffee"/>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className="p-4 max-w-7xl flex mx-auto">        
        <BrowserRouter basename='/workify'>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
