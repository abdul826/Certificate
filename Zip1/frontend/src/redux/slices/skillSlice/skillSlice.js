import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import {
  GetSkillsApi,
  AddSkillApi,
  UpdateSkillApi,
  DeleteSkillApi
} from "../../../Api/SkillsApis/SkillsApi";

/* ✅ INITIAL STATE */
const initialState = {
  SkillsData: [],
  AddSkillData: [],
  UpdateSkillData: [],
  DeleteSkillData: [],
  loading: false,
  error: null
};

/* ✅ GET */
export const GetSkills = createAsyncThunk("GetSkills", async (_, thunkApi) => {
  try {
    const response = await GetSkillsApi();

    if (response.status === 200) {
      return response.data;
    } else {
      return thunkApi.rejectWithValue(response);
    }

  } catch (error) {
    throw error;
  }
});

/* ✅ ADD */
export const AddSkill = createAsyncThunk("AddSkill", async (data) => {
  try {
    console.log("STEP 2: Redux Thunk Hit ✅", data);
    const response = await AddSkillApi(data);
    console.log("STEP 3: API Response ✅", response);

    if (response.status === 200) {
      toast.success("Skill Added ✅");
      return response.data;
    } else {
      toast.error(response?.data?.error || "Error");
    }

  } catch (error) {
    throw error;
  }
});

/* ✅ UPDATE */
export const UpdateSkill = createAsyncThunk("UpdateSkill", async (data) => {
  try {
    const response = await UpdateSkillApi(data.id, data.form);

    if (response.status === 200) {
      toast.success("Skill Updated ✅");
      return response.data;
    } else {
      toast.error(response?.data?.error || "Error");
    }

  } catch (error) {
    throw error;
  }
});

/* ✅ DELETE */
export const DeleteSkill = createAsyncThunk("DeleteSkill", async (id) => {
  try {
    const response = await DeleteSkillApi(id);

    if (response.status === 200) {
      toast.success("Skill Deleted ✅");
      return id;
    } else {
      toast.error(response?.data?.error || "Error");
    }

  } catch (error) {
    throw error;
  }
});

/* ✅ SLICE */
export const skillSlice = createSlice({
  name: "skillSlice",
  initialState,
  extraReducers: (builder) => {

    /* GET */
    builder.addCase(GetSkills.pending, (state) => {
      state.loading = true;
    })
    .addCase(GetSkills.fulfilled, (state, action) => {
      state.loading = false;
      state.SkillsData = action.payload;
    })
    .addCase(GetSkills.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    /* ADD */
    builder.addCase(AddSkill.fulfilled, (state, action) => {
      state.AddSkillData = action.payload;
      state.SkillsData.push(action.payload);
    });

    /* UPDATE */
    builder.addCase(UpdateSkill.fulfilled, (state, action) => {
      state.UpdateSkillData = action.payload;

      state.SkillsData = state.SkillsData.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    });

    /* DELETE */
    builder.addCase(DeleteSkill.fulfilled, (state, action) => {
      state.DeleteSkillData = action.payload;

      state.SkillsData = state.SkillsData.filter(
        (item) => item._id !== action.payload
      );
    });
  }
});

export default skillSlice.reducer;