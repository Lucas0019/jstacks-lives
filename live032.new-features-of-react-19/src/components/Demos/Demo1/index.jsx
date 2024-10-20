import { useState, useMemo, memo, useCallback } from "react";

import { Header } from "./Header";
import { LibrarySelect } from "./LibrarySelect";
import { UploadsList } from "./UploadsList";

const MemoHeader = memo(Header);
const MemoLibrarySelect = memo(LibrarySelect);
const MemoUploadsList = memo(UploadsList);

export function Demo1() {
  const [uploads, setUploads] = useState([]);
  const [library, setLibrary] = useState("");

  const pendingUploads = useMemo(
    () => uploads.filter((upload) => upload.progress < 100),
    [uploads]
  );

  const handleAddFile = useCallback(() => {
    const id = window.crypto.randomUUID();

    setUploads((prevState) =>
      prevState.concat({
        id,
        fileName: `${id}.png`,
        progress: 0,
      })
    );
  }, []);

  const handleStartUpload = useCallback((uploadId) => {
    setUploads((prevState) =>
      prevState.map((upload) => {
        if (upload.id === uploadId) {
          const progress = Math.min(upload.progress + 10, 100);

          return {
            ...upload,
            progress,
          };
        }

        return upload;
      })
    );
  }, []);

  const handleRemoveFile = useCallback((uploadId) => {
    setUploads((prevState) =>
      prevState.filter((upload) => upload.id !== uploadId)
    );
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto my-10 p-4">
      <MemoHeader onAddFile={handleAddFile} />

      <div className="mt-8">
        <div className="mb-4">
          <MemoLibrarySelect library={library} setLibrary={setLibrary} />
        </div>

        <MemoUploadsList
          uploads={pendingUploads}
          onStartUpload={handleStartUpload}
          onRemoveFile={handleRemoveFile}
        />
      </div>
    </div>
  );
}
