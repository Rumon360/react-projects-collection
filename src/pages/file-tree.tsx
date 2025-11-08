import { FolderIcon } from "@heroicons/react/24/solid";

type Folder = {
  name: string;
  folders?: Folder[];
};

type FolderProps = {
  folder: Folder;
};

function Folder({ folder }: FolderProps) {
  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex items-center gap-1.5">
        <FolderIcon className="size-6" /> {folder.name}
      </span>
      <ul className="pl-6">
        {folder.folders?.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
    </li>
  );
}

function FileTree() {
  const folders = [
    {
      name: "Home",
      folders: [
        {
          name: "Movies",
          folders: [
            {
              name: "Action",
              folders: [
                {
                  name: "2000s",
                  folders: [
                    {
                      name: "Popular",
                    },
                  ],
                },
                {
                  name: "2010s",
                },
              ],
            },
            {
              name: "Comedy",
              folders: [
                {
                  name: "2010s",
                },
              ],
            },
          ],
        },
        {
          name: "Pictures",
        },
        {
          name: "Music",
          folders: [
            {
              name: "Rock",
            },
            {
              name: "Classic",
            },
          ],
        },
        {
          name: "Documents",
        },
      ],
    },
  ];

  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul className="pl-6">
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
    </div>
  );
}

export default FileTree;
