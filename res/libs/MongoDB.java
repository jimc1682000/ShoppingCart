package test;

import java.net.UnknownHostException;
import java.util.List;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.Mongo;
import com.mongodb.MongoException;

public class MongoDB {
	public static void main(String[] args) throws UnknownHostException, MongoException {
		// 預設本機連接
		// Mongo m1 = new Mongo();

		// 連接位址，埠號 在創建連線物件之後，得到資料庫：
		Mongo m2 = new Mongo("45.56.87.70", 27017);

		// 資料庫名稱：ShoppingCart 如果資料庫不存在 則自動創建&nbsp; 在得到資料庫物件之後，得到表：
		DB db = m2.getDB("ShoppingCart");

		// 資料庫admin下的表things 如沒有此表 則自動創建&nbsp; mongoDB基於JAVA語言的CRUD ---
		DBCollection dbc = db.getCollection("member");

		// String[] key =new String[]{
		// "MEMBER_ID",
		// "TAKEN",
		// "TAKEN_SORT",
		// "NAME",
		// "TEL",
		// "ADD",
		// "CART",
		// "CHECK_OUT",
		// "SHIPPED",
		// "VIEW_HISTORY",
		// "COUPONS"
		// };
		// for(int i=3;i<100;i++){
		// setUP(dbc,key,
		// new String[]{i+"","","","序號批次建立"+i,"9999999","地球村","","","","",""});
		//
		// }

		gstmongoDB(dbc);
		// NAME "王小明" 序號批次建立3
		// "NAME" : "小明"
		// editMongoDB(dbc,"NAME" , "王小明","序號批次建立1");
		// editMongoDB(dbc,"NAME" , "小明","序號批次建立2");

	}

	/**
	 * 添加資料：
	 * 
	 * @param dbc
	 * @param key
	 * @param content
	 */
	public static void setUP(DBCollection dbc, String[] key, String[] content) {

		// 創建一個物件
		DBObject o = new BasicDBObject();

		for (int i = 0; i < key.length; i++) {
			// 添加一個鍵值對
			o.put(key[i], content[i]);
		}

		// 插入資料
		dbc.insert(o);
	}

	/**
	 * 查詢資料
	 * 
	 * @param dbc
	 */
	public static void gstmongoDB(DBCollection dbc) {

		DBCursor c = dbc.find();
		// 查詢所有清單
		List<DBObject> list = c.toArray();
		for (int i = 0; i < list.size(); i++) {
			DBObject dbo = list.get(i);
			System.out.println(dbo.toString());
		}
	}

	/**
	 * 修改資料
	 * 
	 * @param dbc
	 */
	public static void editMongoDB(DBCollection dbc, String key, String content, String content2) {

		DBObject queryObject = new BasicDBObject();
		queryObject.put(key, content);
		DBObject obj = new BasicDBObject();
		queryObject.put(key, content2);

		// 查詢準則，要修改的值
		dbc.update(queryObject, obj);

	}

	/**
	 * 刪除資料
	 * 
	 * @param dbc
	 */
	public static void delMongoDB(DBCollection dbc) {

		DBObject queryObject = new BasicDBObject();
		DBObject obj = new BasicDBObject();
		queryObject.put("name", "iteye123");
		// 根據條件刪除資料
		dbc.remove(obj);
	}

}
