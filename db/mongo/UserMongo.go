package mongo

import (
	"gin-file/base"
	"gin-file/base/code"
	"gin-file/config"
	log "github.com/cihub/seelog"
	"github.com/globalsign/mgo/bson"
)

//验证用户名密码
func UserLogin(u *base.UserStruct) (*base.NormalResponse, error) {
	defer func() {
		if err := recover(); err != nil {
			log.Error(err)
		}
	}()
	c := config.MgoClient.Copy().DB("").C("user")
	defer c.Database.Session.Close()
	var user base.UserStruct
	err := c.Find(bson.M{"user_id": u.UserId}).One(&user)
	if err != nil {
		if err.Error() == "not found" {
			log.Error(u.UserId, "不存在")
			return &base.NormalResponse{Code: code.LOGIN_PASSWORD_ACCOUNT_ERROR, Message: "用户名密码错误"}, nil
		}
		return nil, err
	}
	if user.Password == u.Password {
		return &base.NormalResponse{Code: code.SUCCESS, Message: "验证成功"}, nil
	}
	return &base.NormalResponse{Code: code.LOGIN_PASSWORD_ACCOUNT_ERROR, Message: "用户名密码错误"}, nil
}

//用户注册
func UserRegister(u *base.UserStruct) (*base.NormalResponse, error) {
	defer func() {
		if err := recover(); err != nil {
			log.Error(err)
		}
	}()
	c := config.MgoClient.Copy().DB("").C("user")
	defer c.Database.Session.Close()
	//首先查询是否存在该用户id
	var us base.UserStruct
	err := c.Find(bson.M{"user_id": u.UserId}).One(&us)
	if err != nil {
		//执行插入操作
		if err.Error() == "not found" {
			err := c.Insert(u)
			if err != nil {
				log.Error(err.Error())
				return nil, err
			}
			return &base.NormalResponse{Code: 200}, nil
		}
		return nil, err
	}
	return &base.NormalResponse{Code: code.DATA_EXIST, Message: "用户已存在"}, nil
}

//查询用户信息
func GetUserInfo(uid string) (*base.UserStruct, error) {
	defer func() {
		if err := recover(); err != nil {
			log.Error(err)
		}
	}()
	c := config.MgoClient.Copy().DB("").C("user")
	defer c.Database.Session.Close()
	var uInfo base.UserStruct
	err := c.Find(bson.M{"user_id": uid}).One(&uInfo)
	if err != nil {
		log.Error(err)
		return nil, err
	}
	return &uInfo, err
}

//修改用户信息
func UpdateUserInfo(u *base.UserStruct) (bool, error) {
	defer func() {
		if err := recover(); err != nil {
			log.Error(err)
		}
	}()
	c := config.MgoClient.Copy().DB("").C("user")
	defer c.Database.Session.Close()
	info, err := c.Upsert(bson.M{"user_id": u.UserId}, bson.M{"$set": bson.M{"username": u.Username, "usermail": u.UserMail}})
	if err != nil {
		log.Error(err.Error())
		return false, err
	}
	log.Info(info)
	return true, nil
}
