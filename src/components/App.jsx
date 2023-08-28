import { useState, useEffect } from "react";
import { fetchData } from "api/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from "./Button/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  const [searcheQuery, setSearcheQuery] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [dataImages, setDataImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    if (!searcheQuery)
      return;
    const imagesApi = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData(searcheQuery, page);
        if (data.totalHits === 0) {
          toast.warning('Not a valid request. Please enter a valid value!', {
            autoClose: 1000,
            hideProgressBar: true,
            theme: 'colored',
          });
          return;
        }
        if (page === 1) {
          toast.success(`Hooray! We found ${data.total} images.`, {
            autoClose: 1000,
            hideProgressBar: true,
            theme: 'colored',
          });
        }
        setDataImages(prevState => [...prevState, ...data.hits]);
        setTotal(data.totalHits);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    imagesApi();
  }, [searcheQuery, page]);

  const handleFormSubmit = searcheQuerySubmit => {
    if (searcheQuery !== searcheQuerySubmit) {
      setSearcheQuery(searcheQuerySubmit);
      setPage(1);
      setDataImages([]);
    }
  };

  const buttonLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar handleFormSubmit={handleFormSubmit} />
      {!error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {isLoading && <Loader />}
      {dataImages.length > 0 && <ImageGallery images={dataImages} />}
      {!isLoading && total !== dataImages.length && (
        <Button onClick={buttonLoadMore} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

