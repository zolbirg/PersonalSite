import { useState , useEffect} from "react";
import "./testcomp.css";

export default function TestComp() {

  const [htmlContent, setHtmlContent] = useState('');
 
  useEffect(() => {
    fetch('./bullsandcows.html')
      .then((response) => response.text())
      .then((htmlString) => {
        setHtmlContent(htmlString);
      });
  }, []);


  return (
    <>
    <h3>fgf</h3>
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;

    </>
  );
}



