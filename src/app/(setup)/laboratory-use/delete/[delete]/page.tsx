import { deleteRoles } from "@/app/actions/delete/delete-roles";
import { deleteLabUse } from "../../actions/delete/delete-labUse";

import { revalidatePath, revalidateTag } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function DeleteLabUsePage({
  params,
}: {
  params: { delete: string };
}) {
  const deleteLabUse = async () => {
    "use server";
    const id: number = parseInt(params.delete);
    const data = await deleteLabUse(id);

    redirect("/laboratory-use");
  };
  return (
    <div className='min-h-screen'>
      <h1>Desea eliminar el rol número {params.delete}</h1>
      <div className='flex justify-center'>
        <span className='pt-1'>v
          <Link href='/roles'>
            <span className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
              NO
            </span>
          </Link>
        </span>
        <form action={deleteLabUse}>
          <button
            type='submit'
            className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          >
            SI
          </button>
        </form>
      </div>
    </div>
  );
}
