<template>
  <main
    class="relative grid w-screen h-screen overflow-hidden place-items-center"
  >
    <div
      class="h-[500px] w-[500px] bg-cyan-300 rounded-full absolute blur-[100px] z-[-1] top-[-300px] left-[-200px]"
    ></div>
    <div
      class="h-[500px] w-[500px] bg-purple-300 rounded-full absolute blur-[100px] z-[-1] bottom-[-300px]"
    ></div>
    <div
      class="h-[500px] w-[500px] bg-pink-300 rounded-full absolute blur-[100px] z-[-1] top-[-100px] right-[-200px]"
    ></div>
    <div class="flex flex-col gap-3 w-[800px] items-center">
      <h1 class="font-bold text-[36px]">Accounts in Database</h1>
      <table class="table w-full text-center">
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th colspan="2">Password</th>
        </tr>
        <tr
          v-for="({ email, name, password, user_id }, index) in userDatas"
          :key="index"
        >
          <td>{{ email }}</td>
          <td>{{ name }}</td>
          <td>{{ password }}</td>
          <td>
            <button
              class="px-4 py-2 text-white bg-red-500 rounded-xl"
              @click="
                (evt) => {
                  evt.preventDefault();
                  deleteUserById(user_id);
                }
              "
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
      <div class="w-full text-right">
        <p>
          go to the
          <a href="/login" class="font-bold text-blue-500 hover:underline"
            >Login Page</a
          >
          to test the login accounts
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const userDatas = ref([]);

const getAllUsers = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

onMounted(async () => {
  const response = await getAllUsers();
  userDatas.value = [...response];
});

// Delete account from database
const deleteUserById = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/users/${id}`)
    const updatedUsers = await getAllUsers();
    userDatas.value = [...updatedUsers];
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped>
td,
th {
  padding: 10px;
  border: 4px solid lightgray;
}
</style>
