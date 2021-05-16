<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="id"
      prop="id">
    </el-table-column>
    <el-table-column
      label="content"
      prop="content">
    </el-table-column> 
    <el-table-column
      align="right">
       <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template> 
     <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
 export default {
    data() {
    	return {
    		tableData:[]
    	}
    },
    created(){
    	this.getData();
    },
    methods: {
    	getData(){
    		 const that = this;
    		 that.axios.get('http://localhost:8086/jquery/greeting').then((response)=>{
                       console.info(response.data);
                       that.tableData = Array(5).fill(response.data);
                 });
    	},
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>