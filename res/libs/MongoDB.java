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
	public static void main(String[] args) throws UnknownHostException, MongoException{
		//�w�]�����s��
//		Mongo m1 = new Mongo();

		//�s����}�A�� �b�Ыسs�u���󤧫�A�o���Ʈw�G
		Mongo m2 = new Mongo("45.56.87.70", 27017);

		//��Ʈw�W�١GShoppingCart �p�G��Ʈw���s�b �h�۰ʳЫ�&nbsp; �b�o���Ʈw���󤧫�A�o���G
		DB db = m2.getDB("ShoppingCart");
		
		//��Ʈwadmin�U����things �p�S������ �h�۰ʳЫ�&nbsp; mongoDB���JAVA�y����CRUD ---
		DBCollection dbc = db.getCollection("member");

		//		String[] key =new String[]{
		//				"MEMBER_ID",
		//				"TAKEN",
		//				"TAKEN_SORT",
		//				"NAME",
		//				"TEL",
		//				"ADD",
		//				"CART",
		//				"CHECK_OUT",
		//				"SHIPPED",
		//				"VIEW_HISTORY",
		//				"COUPONS"
		//		};
		//		for(int i=3;i<100;i++){
		//			setUP(dbc,key,
		//					new String[]{i+"","","","�Ǹ��妸�إ�"+i,"9999999","�a�y��","","","","",""});
		//
		//		}

		gstmongoDB(dbc);
		//NAME "���p��" �Ǹ��妸�إ�3
		//"NAME" : "�p��" 

		//		editMongoDB(dbc,"NAME" , "���p��","�Ǹ��妸�إ�1");
		//		editMongoDB(dbc,"NAME" , "�p��","�Ǹ��妸�إ�2");


	}

	/**
	 * �K�[��ơG
	 * @param dbc
	 * @param key
	 * @param content
	 */
	public static void setUP(DBCollection dbc,String[] key,String[] content){

		//�Ыؤ@�Ӫ��� 
		DBObject o = new BasicDBObject();

		for(int i=0;i<key.length;i++){
			//�K�[�@����ȹ� 
			o.put(key[i],content[i]);	
		}

		//���J��� 	
		dbc.insert(o);
	}

	/**
	 * �d�߸��
	 * @param dbc
	 */
	public static void gstmongoDB(DBCollection dbc){
		
		DBCursor c = dbc.find();
		//�d�ߩҦ��M��
		List<DBObject> list = c.toArray();
		for (int i = 0; i <list.size(); i++) {
			DBObject dbo = list.get(i);
			System.out.println(dbo.toString());
		}
	}

	/**
	 * �ק���
	 * @param dbc
	 */
	public static void editMongoDB(DBCollection dbc,String key,String content,String content2){

		DBObject queryObject = new BasicDBObject();
		queryObject.put(key, content);
		DBObject obj = new BasicDBObject();
		queryObject.put(key, content2);

		//�d�߷ǫh�A�n�ק諸�� 
		dbc.update(queryObject, obj);

	}

	/**
	 * �R�����
	 * @param dbc
	 */
	public static void delMongoDB(DBCollection dbc){

		DBObject queryObject = new BasicDBObject();
		DBObject obj = new BasicDBObject(); 
		queryObject.put("name", "iteye123"); 
		//�ھڱ���R�����
		dbc.remove(obj);
	}



}
