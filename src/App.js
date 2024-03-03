import { useState } from "react";
import axios from "axios";
const App = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFile(formData.get("video"));
    const { data } = await axios.post("/convert", formData, {
      onUploadProgress: (e) => {
        const p = (e.loaded * 100) / e.total;
        setProgress(p);
      },
    });
    console.log(data);
  };
  const design = (
    <>
      <div className="flex flex-col bg-gray-100 md:h-screen flex items-center justify-center ">
        <div className="flex justify-center">
          <img src="/logo.png" className="w-8/12" />
        </div>
        <div className="text-sm sm:text-lg font-semibold leading-5 my-3">
          Unlocking Possibilities: Convert Over{" "}
          <span className="text-red-500">30 Formats</span> Seamlessly!{" "}
        </div>
        <div className="bg-white p-16 rounded-lg shadow-lg md:w-6/12">
          <h1 className="text-black text-5xl font-bold mb-8">
            Video Converter
          </h1>
          <form className="flex flex-col gap-6 mb-2" onSubmit={onSubmit}>
            <div className="flex">
              <input
                type="file"
                name="video"
                accept="video/*"
                className="bg-gray-200 p-3 rounded-sm flex-1"
                required
              />
              <select
                name="format"
                required
                className="bg-indigo-600 p-[16px] text-white"
              >
                <option value=".mp4">.mp4</option>
                <option value=".avi">.avi</option>
                <option value=".mov">.mov</option>
                <option value=".wmv">.wmv</option>
                <option value=".flv">.flv</option>
                <option value=".mkv">.mkv</option>
                <option value=".m4v">.m4v</option>
                <option value=".webm">.webm</option>
                <option value=".mpeg">.mpeg</option>
                <option value=".mpg">.mpg</option>
                <option value=".ogv">.ogv</option>
                <option value=".vob">.vob</option>
                <option value=".qt">.qt</option>
                <option value=".asf">.asf</option>
                <option value=".m2v">.m2v</option>
                <option value=".rm">.rm</option>
                <option value=".rmvb">.rmvb</option>
                <option value=".ts">.ts</option>
                <option value=".dat">.dat</option>
                <option value=".mts">.mts</option>
                <option value=".m2ts">.m2ts</option>
                <option value=".divx">.divx</option>
                <option value=".xvid">.xvid</option>
                <option value=".3g2">.3g2</option>
                <option value=".h264">.h264</option>
                <option value=".264">.264</option>
                <option value=".x264">.x264</option>
                <option value=".avchd">.avchd</option>
                <option value=".flv">.flv</option>
                <option value=".f4v">.f4v</option>
                <option value=".swf">.swf</option>
                <option value=".dvd">.dvd</option>
                <option value=".ogm">.ogm</option>
                <option value=".mxf">.mxf</option>
                <option value=".nut">.nut</option>
                <option value=".ts">.ts</option>
                <option value=".tts">.tts</option>
                <option value=".svi">.svi</option>
                <option value=".amv">.amv</option>
                <option value=".viv">.viv</option>
                <option value=".vivo">.vivo</option>
                <option value=".nsv">.nsv</option>
                <option value=".mjpg">.mjpg</option>
                <option value=".mjpeg">.mjpeg</option>
                <option value=".mod">.mod</option>
                <option value=".tod">.tod</option>
                <option value=".vro">.vro</option>
                <option value=".dvr-ms">.dvr-ms</option>
                <option value=".evo">.evo</option>
                <option value=".mts">.mts</option>
                <option value=".tp">.tp</option>
                <option value=".trp">.trp</option>
                <option value=".m2p">.m2p</option>
                <option value=".m2v">.m2v</option>
                <option value=".m2t">.m2t</option>
                <option value=".m2ts">.m2ts</option>
                <option value=".mpg">.mpg</option>
                <option value=".mpeg">.mpeg</option>
                <option value=".mpe">.mpe</option>
                <option value=".mpv">.mpv</option>
                <option value=".mpg2">.mpg2</option>
                <option value=".mp2v">.mp2v</option>
                <option value=".mpeg2">.mpeg2</option>
                <option value=".vob">.vob</option>
                <option value=".ps">.ps</option>
                <option value=".ts">.ts</option>
                <option value=".trp">.trp</option>
                <option value=".tp">.tp</option>
                <option value=".m2p">.m2p</option>
                <option value=".ps">.ps</option>
                <option value=".pva">.pva</option>
                <option value=".ogv">.ogv</option>
                <option value=".ogm">.ogm</option>
                <option value=".ogg">.ogg</option>
                <option value=".m1v">.m1v</option>
                <option value=".m2v">.m2v</option>
                <option value=".m4v">.m4v</option>
                <option value=".mjp">.mjp</option>
                <option value=".mjpeg">.mjpeg</option>
                <option value=".avi">.avi</option>
                <option value=".mov">.mov</option>
                <option value=".qt">.qt</option>
                <option value=".asf">.asf</option>
                <option value=".wm">.wm</option>
                <option value=".wmv">.wmv</option>
                <option value=".wvx">.wvx</option>
                <option value=".rm">.rm</option>
                <option value=".rmvb">.rmvb</option>
                <option value=".flv">.flv</option>
                <option value=".swf">.swf</option>
                <option value=".divx">.divx</option>
                <option value=".xvid">.xvid</option>

                <option value=".mpv4">.mpv4</option>
                <option value=".h264">.h264</option>
                <option value=".264">.264</option>
                <option value=".mts">.mts</option>
                <option value=".m2ts">.m2ts</option>
                <option value=".m2t">.m2t</option>
                <option value=".ts">.ts</option>
                <option value=".tp">.tp</option>
                <option value=".trp">.trp</option>
                <option value=".3gp">.3gp</option>
                <option value=".3gpp">.3gpp</option>
                <option value=".3g2">.3g2</option>
                <option value=".3gp2">.3gp2</option>
                <option value=".3gpp2">.3gpp2</option>
                <option value=".mp3">.mp3</option>
                <option value=".m4a">.m4a</option>
                <option value=".aac">.aac</option>
                <option value=".wav">.wav</option>
                <option value=".wma">.wma</option>
                <option value=".ogg">.ogg</option>
                <option value=".flac">.flac</option>
                <option value=".ape">.ape</option>
                <option value=".opus">.opus</option>
                <option value=".ac3">.ac3</option>
                <option value=".aiff">.aiff</option>
                <option value=".amr">.amr</option>
                <option value=".dts">.dts</option>
                <option value=".caf">.caf</option>
                <option value=".mid">.mid</option>
                <option value=".midi">.midi</option>
                <option value=".mka">.mka</option>
                <option value=".mpc">.mpc</option>
                <option value=".mp+">.mp+</option>
                <option value=".m4b">.m4b</option>
                <option value=".m4p">.m4p</option>
                <option value=".ra">.ra</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button className="w-fit bg-indigo-600 py-2 px-8 rounded-sm text-white text-lg">
                Submit
              </button>
            </div>
          </form>
          {file && (
            <>
              <div className="flex justify-between my-5">
                <label>{file.name}</label>
                <label>{(file.size / 1000 / 1000).toFixed(1)}Mb</label>
              </div>
              <div className="bg-gray-200 h-8">
                <div
                  className="bg-green-500  h-full"
                  style={{ width: progress + "%" }}
                ></div>
                <label className="text-zinc-600 font-semibold">
                  Progress- {Math.floor(progress)}%
                </label>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
  return design;
};

export default App;
